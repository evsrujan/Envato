



a=document.getElementsByClassName("c14")
var b=[0,0,0,0,0];




function first(x)
{
    if(x==0)
    {
        a[0].style.backgroundColor="#327c95d3";
        for(i=1;i<5;i++)
        {
            a[i].style.backgroundColor="#273144";
            b[i]=0;
        }
    }
    else if(x==1){
        a[0].style.backgroundColor="#273144";
        if(b[x]%2==0)
        {
            a[x].style.backgroundColor="#327c95d3";
        }
        else{
            a[x].style.backgroundColor="#273144";
        }
        b[x]++;
    }
    else if(x==2){
        a[0].style.backgroundColor="#273144";
        if(b[x]%2==0)
        {
            a[x].style.backgroundColor="#327c95d3";
        }
        else{
            a[x].style.backgroundColor="#273144";
        }
        b[x]++;
    }
    else if(x==3){
        a[0].style.backgroundColor="#273144";
        if(b[x]%2==0)
        {
            a[x].style.backgroundColor="#327c95d3";
        }
        else{
            a[x].style.backgroundColor="#273144";
        }
        b[x]++;
    }
    else if(x==4){
        a[0].style.backgroundColor="#273144";
        if(b[x]%2==0)
        {
            a[x].style.backgroundColor="#327c95d3";
        }
        else{
            a[x].style.backgroundColor="#273144";
        }
        b[x]++;
    }
}