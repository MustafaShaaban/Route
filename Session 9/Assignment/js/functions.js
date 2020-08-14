function _all(el) {
    return document.querySelectorAll(el).length > 0 ? Array.from(document.querySelectorAll(el)) : [];
}

function _(el) {
    return document.querySelector(el);
}

function restForm() {
    _('#site_name').value = '';
    _('#site_url').value = '';
    _('#addBookmark').disabled = true;
    _('#addBookmark').style.display = "block";
    _('#editBookmark').style.display = "none";
}