const ctrlModule = ((dataModule, uiModule) => {

    const init = () => {
        let request = $.ajax({
            url: dataModule.constants.allShows,
            method: "GET",
        });

        request.done(function (objectData) {
            objectData.forEach(element => {
                const show = dataModule.createShows(element.id, element.name, element.image.medium, element.rating.average);
                const card = uiModule.createCard(show);
                uiModule.$firstPageCardInputPlace.append(card);
            });

        })
    };

    const getShowSeasonUrlRequest = () => {

    }

    const selectedShowInit = () => {

        
        let request = $.ajax({

        })
    }
    

    return {
        init
    }

})(dataModule, uiModule);