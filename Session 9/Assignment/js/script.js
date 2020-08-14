/** -----------------------------------------------------------------------------------
 *
 *   Package Name: Session 9 Assignment 7 - Main Script File
 *   Version: 2.0
 *   Author: Mustafa Shaaban
 *
 *   TODO:: fix the url checking when updating records, it returns an error because url is already assigned to the record itself.
 *   TODO:: validate the url to be a valid url format.
 *   TODO:: Complete the file documenting.
 *
 *
 *   OBJECTS INDEX
 *   ===================
 *   01. DB
 *      The object responsible for manage the DB operations
 *
 *   02. view
 *      This object responsible for managing the app view
 *
 *   03. CRUD
 *      This object responsible for managing the crud operations add/edit/delete
 *      by firing events which calls DB methods directly
 *
 *   04. validation
 *      This object responsible for validate inputs on keyUp
 *      if inputs are empty and if url is already exists before in the local storage
 *
 *
 ----------------------------------------------------------------------------------*/

(function () {

    window.onload = function () {
        DB.initDB();
        view.updateView();
    };

    let siteName = _('#site_name'),
        siteUrl  = _('#site_url'),
        tblBody  = _('#tableBody');

    /**
     * The object responsible for manage the DB operations
     *
     * @type {{initDB: initDB, getAll: (function(): any),
     * get: (function(*): *), insert: insert, update: update,
     * isExist: (function(*): boolean), delete: delete}}
     */
    const DB = {
        /**
         * create localstorage
         */
        initDB: function () {
            if (localStorage.getItem('bookmarks') === null) {
                localStorage.setItem('bookmarks', JSON.stringify([]));
            }
        },

        /**
         * get specific bookmark by id
         *
         * @param id the bookmark id
         * @return {*}
         */
        get: function (id) {
            let data = this.getAll();
            return data[id];
        },

        /**
         * get all bookmarks and parse it
         *
         * @return {any}
         */
        getAll: function () {
            return JSON.parse(localStorage.getItem('bookmarks'));
        },

        /**
         * This method responsible for checking the url if exists
         *
         * @param url
         * @return {boolean} true if exists
         */
        isExist: function (url) {
            let exists = this.getAll().filter((bookmark) => {
                return bookmark.url === url.trim();
            });
            return exists.length > 0;
        },

        /**
         * the method responsible for inserting the new records to localstorage
         *
         * @param bookmarkObj
         */
        insert: function (bookmarkObj) {
            let data = this.getAll();
            data.push(bookmarkObj);
            localStorage.setItem('bookmarks', JSON.stringify(data));
        },

        /**
         * the method responsible for updating the localstorage records
         *
         * @param bookmarkObj
         */
        update: function (bookmarkObj) {
            let data = this.getAll();
            data[bookmarkObj.id] = bookmarkObj;
            localStorage.setItem('bookmarks', JSON.stringify(data));
        },

        /**
         * the method responsible for deleting records from localstorage.
         *
         * @param id
         */
        delete: function (id) {
            let data = this.getAll();
            data.splice(id, 1);
            localStorage.setItem('bookmarks', JSON.stringify(data));
            restForm();
        }
    };

    /**
     * This object responsible for managing the app view
     *
     * @type {{init: init, visitBtn: visitBtn, updateView: updateView, createRow: (function(*): string), editBtn: editBtn}}
     */
    const view = {
        init: function () {
            CRUD.init();
            this.visitBtn();
            this.editBtn();
            validation.init();
        },

        createRow: function (data) {
            let template = `
                <tr>
                    <td>${data.name}</td>
                    <td>
                        <div class="controllers">
                            <a href="javascript:" class="btn btn-info visitBtn" data-id="${data.id}">Visit</a>
                            <a href="javascript:" class="btn btn-warning editBtn" data-id="${data.id}">Edit</a>
                            <a href="javascript:" class="btn btn-danger removeBtn" data-id="${data.id}">Remove</a>
                        </div>
                    </td>
                </tr>
            `;
            return template;
        },

        updateView: function () {
            let template = '',
                all      = DB.getAll();

            for (let i = 0; i < all.length; i++) {
                let bookmarkObj = {
                    id: i,
                    status: all[i].status,
                    name: all[i].name.trim(),
                    url: all[i].url.trim()
                };
                template += this.createRow(bookmarkObj);
            }

            tblBody.innerHTML = template;

            _('.empty-alert').style.display = (all.length > 0) ? 'none' : 'block';

            this.init();
        },

        visitBtn: function () {
            for (let i = 0; i < _all('.visitBtn').length; i++) {
                _all('.visitBtn')[i].addEventListener('click', function (e) {
                    e.preventDefault();
                    let $this    = e.currentTarget,
                        bookmark = DB.get($this.getAttribute('data-id'));
                    window.open(bookmark.url, '_blank');
                });
            }
        },

        editBtn: function () {
            for (let i = 0; i < _all('.editBtn').length; i++) {
                _all('.editBtn')[i].addEventListener('click', function (e) {
                    e.preventDefault();
                    let $this    = e.currentTarget,
                        bookmark = DB.get($this.getAttribute('data-id'));
                    siteName.focus();
                    siteName.value = bookmark.name;
                    siteUrl.value = bookmark.url;
                    _('#addBookmark').style.display = "none";
                    _('#editBookmark').style.display = "block";
                    _('#editBookmark').setAttribute('data-id', $this.getAttribute('data-id'));
                });
            }
        }
    };

    /**
     * This object responsible for managing the crud operations add/edit/delete
     * by firing events which calls DB methods directly
     *
     * @type {{add: add, init: init, edit: edit, delete: delete}}
     */
    const CRUD = {
        init: function () {
            this.add();
            this.edit();
            this.delete();
        },

        add: function () {
            _('#addBookmark').addEventListener('click', function (e) {
                e.preventDefault();
                if (siteName.value.trim() !== '' && siteUrl.value.trim() !== '') {
                    let bookmarkObj = {
                        status: 'publish',
                        name: siteName.value.trim(),
                        url: siteUrl.value.trim()
                    };
                    DB.insert(bookmarkObj);
                    view.updateView();
                    restForm();

                }
            });
        },

        edit: function () {
            _('#editBookmark').addEventListener('click', function (e) {
                e.preventDefault();
                if (siteName.value.trim() !== '' && siteUrl.value.trim() !== '') {
                    let $this      = e.currentTarget,
                        bookmarkID = $this.getAttribute('data-id');

                    let bookmarkObj = {
                        id: bookmarkID,
                        status: 'modified',
                        name: siteName.value.trim(),
                        url: siteUrl.value.trim()
                    };

                    DB.update(bookmarkObj);
                    view.updateView();
                    restForm();
                }
            });
        },

        delete: function () {
            for (let i = 0; i < _all('.removeBtn').length; i++) {
                _all('.removeBtn')[i].addEventListener('click', function (e) {
                    e.preventDefault();
                    let $this      = e.currentTarget,
                        bookmarkID = $this.getAttribute('data-id');
                    DB.delete(bookmarkID);
                    view.updateView();
                });
            }
        }


    };

    /**
     * This object responsible for validate inputs on keyUp
     * if inputs are empty and if url is already exists before in the local storage
     *
     * @type {{init: init, validateUrl: validateUrl, inputsKeyUp: inputsKeyUp, validateEmptyInp: validateEmptyInp}}
     */
    const validation = {
        init: function () {
            this.inputsKeyUp();
        },

        inputsKeyUp: function () {
            siteName.addEventListener('keyup', this.validateEmptyInp);

            siteUrl.addEventListener('keyup', this.validateEmptyInp);

            siteUrl.addEventListener('keyup', this.validateUrl);
        },

        validateEmptyInp: function (e) {
            e.preventDefault();
            let $this     = e.currentTarget,
                errAreaID = $this.getAttribute("data-err");

            if ($this.value.trim() === '') {
                _(errAreaID).style.display = 'block';
            } else {
                _(errAreaID).style.display = 'none';
            }

            _('#addBookmark').disabled = siteName.value.trim() === '' || siteUrl.value.trim() === '';

            _('#editBookmark').disabled = siteName.value.trim() === '' || siteUrl.value.trim() === '';
        },

        validateUrl: function (e) {
            let $this = e.currentTarget;

            if (DB.isExist($this.value)) {
                _('#site_url_exists').style.display = 'block';
                _('#addBookmark').disabled = true;
                _('#editBookmark').disabled = true;
            } else {
                _('#site_url_exists').style.display = 'none';
                _('#addBookmark').disabled = false;
                _('#editBookmark').disabled = false;
            }

        }
    };


})();