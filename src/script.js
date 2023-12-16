document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector("#display");
});

function appendToDisplay(element)
{
    if (display.value == "Error") clearDisplay()
    display.value += element;
}

function clearDisplay()
{
    display.value = '';
}

function calculate()
{
    try
    {
        output = eval(display.value)
        if (output == 'Infinity' || output == '-Infinity') display.value = "Error";
        else display.value = output;
    }
    catch(exception)
    {
        display.value = "Error"
    }
}
