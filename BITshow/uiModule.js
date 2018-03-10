const uiModule = (($) => {

    const $firstPageCardInputPlace = $(".firstPageCardInputPlace");
    //  const $createCardElementNode = $('.firstPageParagraph');

    const $selectedShowTitle = $(".selectedShowTitle");
    const $selectedShowImg = $(".selectedShowImg");
    const $selectedShowSeasons = $(".selectedShowSeasons");
    const $selectedShowCast = $(".selectedShowCast");
    const $selectedShowSummary = $(".selectedShowSummary");



    const createCard = (show) => {
        const {
            id,
            imgMedium,
            title
        } = show

        return `
            <div class="card col-4">
            <a href="selectedShow.html" data-show-id="${id}">
                <img class="card-img-top" src="${imgMedium}" alt="Card image cap">
                <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                    </a>
                </div>
            </div>   `
    };



    // const singleCard = $(cardTemplate)

    return {
        createCard,
        $firstPageCardInputPlace
    }

})(jQuery);