    importeLib();

    function initMonetizze(link1, link2){
      const link_monetizze = link1;
      const link_pagamento = link2;

      const query = GetQuery();
      if (query.href == "monetizze") {
        document.querySelector("#botao").href = link_monetizze;
        setCookie("monetizze", true, "3650")
      }else{
        document.querySelector("#botao").href = link_pagamento;
      }

      if(getCookie("monetizze") == "true"){
        document.querySelector("#botao").href = link_monetizze;
      }
      
    }

    function GetQuery(){
      var query = location.search.slice(1);
      var partes = query.split('&');
      var data = {};
      partes.forEach(function (parte) {
          var chaveValor = parte.split('=');
          var chave = chaveValor[0];
          var valor = chaveValor[1];
          data[chave] = valor;
      });

      return data;

    }

    function importeLib(){
      var imported = document.createElement('script');
      imported.src = 'https://www.jfstartupstudio.com.br/admin/libs/cookies/index.js';
      document.head.appendChild(imported);
    }