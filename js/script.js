
// creo un oggetto lista spesa
var listaSpesa = [
  // 'pasta',
  // 'acqua',
  // 'patate',
  // 'biscotti',
];

for( var i = 0; i < listaSpesa.length; i++){
  // clono il template html
  var template = $('.template li').clone();
  // aggiungo gli elementi al template
  template.prepend(listaSpesa[i]);
  // aggiungo il template alla lista
  $('.todo_list').append(template);
}

// funzione che al click elimina l'elemento della spesa cliccato
$('.todo_list').on('click','.element_remove',function(){
  $(this).parent().remove();
});

// funzione che alla pressione di INVIO aggiunge un elemento alla listaSpesa
$('#add_element').keydown(function(event){
  if(event.which == 13){
    var aggiungi = $(this).val();
    // aggiungo il template
    var template = $('.template li').clone();
    template.prepend(aggiungi);
    // aggiungo il template alla listaSpesa
    $('.todo_list').append(template);
    $(this).val('');
  }
});
