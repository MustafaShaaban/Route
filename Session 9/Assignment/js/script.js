(function () {

    var siteName    = document.querySelector('#site_name'),
        siteUrl     = document.querySelector('#site_url'),
        submitBtn   = document.querySelector('#addBookmark'),
        siteNameErr = document.querySelector('#site_name_err'),
        siteUrlErr  = document.querySelector('#site_url_err');

    var tblBody   = document.querySelector('#tableBody'),
        visitBtn  = _('.visitBtn'),
        editBtn   = _('.editBtn'),
        deleteBtn = _('.removeBtn');


    (function createDB() {
        if (localStorage.getItem('bookmarks') === null) {
            localStorage.setItem('bookmarks', JSON.stringify([]));
        }
    })();

    function _(el) {
        return document.querySelectorAll(el).length > 0 ? Array.from(document.querySelectorAll(el)) : [];
    }


    const DB = {
        get: function (id) {
            var data = this.getAll();
            console.log(data[id]);
        },

        getAll: function () {
            return JSON.parse(localStorage.getItem('bookmarks'));
        },

        insert: function (bookmarkObj) {
            var data = this.getAll();
            data.push(bookmarkObj);
            localStorage.setItem('bookmarks', JSON.stringify(data));
        },

        update: function () {

        },

        delete: function () {

        }
    };

    function displayBookmarks() {
        var template = '',
            all      = DB.getAll();
        for (var i = 0; i < all.length; i++) {
            template += `
            <tr>
                <td>${all[i].name}</td>
                <td>
                    <div class="controllers">
                        <a href="javascript:" class="btn btn-info visitBtn" data-id="${i}">Visit</a>
                        <a href="javascript:" class="btn btn-warning editBtn" data-id="${i}">Edit</a>
                        <a href="javascript:" class="btn btn-danger removeBtn" data-id="${i}">Remove</a>
                    </div>
                </td>
            </tr>
        `;
        }
        tblBody.innerHTML = template;
    };

    displayBookmarks();

    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (siteName.value !== '' && siteUrl.value !== '') {
            var bookmarkObj = {
                name: siteName.value,
                url: siteUrl.value
            };
            DB.insert(bookmarkObj);
            displayBookmarks();
            restForm();

        }


    });

    // visitBtn.addEventListener('click', function (e) {
    //     e.preventDefault();
    // });
    //
    // editBtn.addEventListener('click', function (e) {
    //     e.preventDefault();
    // });

    for (var i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener('click', function (e) {
            e.preventDefault();
            var $this      = e.currentTarget,
                bookmarkID = $this.getAttribute('data-id');

            DB.get(bookmarkID);
        });
    }

    siteName.addEventListener('keyup', validateEmptyInp);

    siteUrl.addEventListener('keyup', validateEmptyInp);


    function validateEmptyInp(e) {
        e.preventDefault();
        var $this     = e.currentTarget,
            errAreaID = $this.getAttribute("data-err");

        if ($this.value === '') {
            document.querySelector(errAreaID).style.cssText = 'display: block !important';
        } else {
            document.querySelector(errAreaID).style.cssText = 'display: none !important';
        }
        submitBtn.disabled = siteName.value === '' || siteUrl.value === '';
    }

    function restForm() {
        siteName.value = '';
        siteUrl.value = '';
        submitBtn.disabled = true;
    }


})();