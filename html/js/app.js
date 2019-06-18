$(".character-box").hover(
    function() {
        $(this).css({
            "background": "rgba(42, 125, 193, 1.0)",
            "transition": "200ms",
        });
    }, function() {
        $(this).css({
            "background": "rgba(0,0,0,0.6)",
            "transition": "200ms",
        });
    }
);

$(".character-box").click(function () {
    $(".character-box").removeClass('active-char');
    $(this).addClass('active-char');
    $(".character-buttons").css({"display":"block"});
    if ($(this).attr("data-ischar") === "true") {
        $("#delete").css({"display":"block"});
    } else {
        $("#delete").css({"display":"none"});
    }
});

$("#play-char").click(function () {
    $.post("http://esx_characters/CharacterChosen", JSON.stringify({
        charid: $('.active-char').attr("data-charid"),
        ischar: $('.active-char').attr("data-ischar"),
    }));
    esx_character.CloseUI();
});

$("#deletechar").click(function () {
    $.post("http://esx_characters/DeleteCharacter", JSON.stringify({
        charid: $('.active-char').attr("data-charid"),
    }));
    esx_character.CloseUI();
});

(() => {
    esx_character = {};

    esx_character.ShowUI = function(data) {
        $('.main-container').css({"display":"block"});
        if(data.characters !== null) {
            $.each(data.characters, function (index, char) {
                if (char.charid !== 0) {
                    var charid = char.identifier.charAt(4);
                    $('[data-charid=' + charid + ']').html('<h3 class="character-fullname">'+ char.firstname +' '+ char.lastname +'</h3><div class="character-info"><p class="character-info-work"><strong>Trabalhos: </strong><span>'+ char.job +'</span></p><p class="character-info-money"><strong>Carteira: </strong><span>'+ char.money +'</span></p><p class="character-info-bank"><strong>Banco: </strong><span>'+ char.bank +'</span></p> <p class="character-info-dateofbirth"><strong>Data de nascimento: </strong><span>'+ char.dateofbirth +'</span></p> <p class="character-info-gender"><strong>Sexo: </strong><span>'+ char.sex +'</span></p></div>').attr("data-ischar", "true");
                }
            });
        }
    };

    esx_character.CloseUI = function() {
        $('.main-container').css({"display":"none"});
        $(".character-box").removeClass('active-char');
        $("#delete").css({"display":"none"});
		$(".character-box").html('<h3 class="character-fullname"><i class="fas fa-plus"></i></h3><div class="character-info"><p class="character-info-new">Criar novo personagem</p></div>').attr("data-ischar", "false");
    };
    window.onload = function(e) {
        window.addEventListener('message', function(event) {
            switch(event.data.action) {
                case 'openui':
                    esx_character.ShowUI(event.data);
                    break;
            }
        })
    }

})();
