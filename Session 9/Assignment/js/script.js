(function () {

    window.onload = function () {
        DB.initDB();
        view.updateView();
    };

    let siteName    = _('#site_name'),
        siteUrl     = _('#site_url'),
        submitBtn   = _('#addBookmark'),
        siteNameErr = _('#site_name_err'),
        siteUrlErr  = _('#site_url_err');

    let tblBody   = _('#tableBody'),
        visitBtn  = _all('.visitBtn'),
        editBtn   = _all('.editBtn'),
        deleteBtn = _all('.removeBtn');

    const DB = {
        initDB: function () {
            if (localStorage.getItem('bookmarks') === null) {
                localStorage.setItem('bookmarks', JSON.stringify([]));
            }
        },

        get: function (id) {
            let data = this.getAll();
            return data[id];
        },

        getAll: function () {
            return JSON.parse(localStorage.getItem('bookmarks'));
        },

        isExist: function () {

        },

        insert: function (bookmarkObj) {
            let data = this.getAll();
            data.push(bookmarkObj);
            localStorage.setItem('bookmarks', JSON.stringify(data));
        },

        update: function (bookmarkObj) {
            let data = this.getAll();
            data[bookmarkObj.id] = bookmarkObj;
            localStorage.setItem('bookmarks', JSON.stringify(data));
        },

        delete: function (id) {
            let data = this.getAll();
            data.splice(id, 1);
            localStorage.setItem('bookmarks', JSON.stringify(data));
        }
    };

    const view = {
        init: function () {
            this.visitBtn();
            this.editBtn();
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
                    name: all[i].name,
                    url: all[i].url
                };
                template += this.createRow(bookmarkObj);
            }
            tblBody.innerHTML = template;
            CRUD.init();
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

    const CRUD = {
        init: function () {
            this.add();
            this.edit();
            this.delete();
        },

        add: function () {
            _('#addBookmark').addEventListener('click', function (e) {
                e.preventDefault();
                if (siteName.value !== '' && siteUrl.value !== '') {
                    let bookmarkObj = {
                        status: 'publish',
                        name: siteName.value,
                        url: siteUrl.value
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
                if (siteName.value !== '' && siteUrl.value !== '') {
                    let $this = e.currentTarget,
                        bookmarkID = $this.getAttribute('data-id');

                    let bookmarkObj = {
                        id: bookmarkID,
                        status: 'modified',
                        name: siteName.value,
                        url: siteUrl.value
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


    siteName.addEventListener('keyup', validateEmptyInp);

    siteUrl.addEventListener('keyup', validateEmptyInp);


    function validateEmptyInp(e) {
        e.preventDefault();
        let $this     = e.currentTarget,
            errAreaID = $this.getAttribute("data-err");

        if ($this.value === '') {
            _(errAreaID).style.cssText = 'display: block !important';
        } else {
            _(errAreaID).style.cssText = 'display: none !important';
        }

        _('#addBookmark').disabled = siteName.value === '' || siteUrl.value === '';
        _('#editBookmark').disabled = siteName.value === '' || siteUrl.value === '';
    }


})();