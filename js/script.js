$(document).ready(function() {
    $('#blanks form').submit(function(event){
        let person1Input = $('input#person1').val();
        let person2Input = $('input#person2').val();
        let animalInput = $('input#animal').val();
        let exclamationInput = $('input#exclamation').val();
        let verbInput = $('input#verb').val();
        let nounInput = $('input#noun').val();
        $('.person1').append(person1Input);
        $('.person2').append(person2Input)
        $('.animal').append(animalInput)
        $('.exclamation').append(exclamationInput)
        $('.verb').append(verbInput)
        $('.noun').append(nounInput)

        $('#story').show();
        event.preventDefault()
    });
});