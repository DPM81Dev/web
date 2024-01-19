function resetear(){
    $("#resultado").html("");
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;

        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;

        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;

        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    $("#resultado").html(res);
}//
var operandoa;
var operandob;
var operacion;

$(document).ready(function(){
    $("#uno").on("click",function(){
        $("#resultado").append("1");
    });
    $("#dos").on("click",function(){
        $("#resultado").append("2");
    });
    $("#tres").on("click",function(){
        $("#resultado").append("3");
    });
    $("#cuatro").on("click",function(){
        $("#resultado").append("4");
    });
    $("#cinco").on("click",function(){
        $("#resultado").append("5");
    });
    $("#seis").on("click",function(){
        $("#resultado").append("6");
    });
    $("#siete").on("click",function(){
        $("#resultado").append("7");
    });
    $("#ocho").on("click",function(){
        $("#resultado").append("8");
    });
    $("#nueve").on("click",function(){
        $("#resultado").append("9");
    });
    $("#cero").on("click",function(){
        $("#resultado").append("0");
    });

    $("#reset").on("click",function(){
        resetear();
    });
    $("#suma").on("click",function(){
        operandoa = $("#resultado").html();
          operacion = "+";
          limpiar();
    });
    $("#resta").on("click",function(){
        operandoa = $("#resultado").html();
          operacion = "-";
          limpiar();
    });
    $("#multiplicacion").on("click",function(){
        operandoa = $("#resultado").html();
          operacion = "*";
          limpiar();
    });
    $("#division").on("click",function(){
        operandoa = $("#resultado").html();
          operacion = "/";
          limpiar();
    });
    $("#igual").on("click",function(){
        operandob = $("#resultado").html();
          resolver();
    });
});

//Operaciones
function limpiar(){
    $("#resultado").html("");
}

function resetear(){
    $("#resultado").html("");
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;

        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;

        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;

        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    $("#resultado").html(res);
}