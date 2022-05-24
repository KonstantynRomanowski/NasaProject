const DEFAULF_PAGE_NUMBER = 1;
const DEFAULF_PAGE_LIMIT = 0;

function getPagination(query) {
    const page = Math.abs(query.page) || DEFAULF_PAGE_NUMBER;
    const limit = Math.abs(query.limit) || DEFAULF_PAGE_LIMIT;
    const skip = (page - 1) * limit;

    return {
        skip,
        limit
    };
}

module.exports = {
    getPagination,
}