(function () {

    (function createDB() {
        if (localStorage.getItem('bookmarks') === null) {
            localStorage.setItem('bookmarks', JSON.stringify([]));
        }
    })();

    function _(el) {
        return document.querySelectorAll(el).length > 0 ? Array.from(document.querySelectorAll(el)) : [];
    }

    var siteName    = document.querySelector('#site_name'),
        siteUrl     = document.querySelector('#site_url'),
        submitBtn   = document.querySelector('#addBookmark'),
        siteNameErr = document.querySelector('#site_name_err'),
        siteUrlErr  = document.querySelector('#site_url_err');

    var tblBody   = document.querySelector('#tableBody'),
        visitBtn  = document.querySelector('.visitBtn'),
        editBtn   = document.querySelector('.editBtn'),
        deleteBtn = document.querySelector('.removeBtn');

    function createRow() {

    }

    const DB = {
        get: function () {

        },

        getAll: function () {
            return JSON.parse(localStorage.getItem('bookmarks'));
        },

        insert: function (bookmarkObj) {
            var data = this.getAll();
            data.push(bookmarkObj);
            restForm();
            console.log(data);
        },

        update: function () {

        },

        delete: function () {

        }
    };

    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        var siteName    = document.querySelector('#site_name'),
            siteUrl     = document.querySelector('#site_url');

        if (siteName.value !== '' && siteUrl.value !== '') {
            var bookmarkObj = {
                name: siteName.value,
                url: siteUrl.value
            };
            DB.insert(bookmarkObj);
        }


    });

    visitBtn.addEventListener('click', function (e) {
        e.preventDefault();
    });

    editBtn.addEventListener('click', function (e) {
        e.preventDefault();
    });

    deleteBtn.addEventListener('click', function (e) {
        e.preventDefault();
    });

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

    window.onload = function () {

    };

})();