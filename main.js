var arr=[];
var row=parseInt(prompt("enter the size of row"));
for(j=0;j<row;j++)
{
	arr[j]=parseInt(prompt("Enter the value"+ " "+ (j+1)));
}
document.write("Odd Numbers");
document.write("<br>");
var count=0;
for(let i=0;i<arr.length;i++)
{
	if(arr[i]%2!=0)
	{
		document.write("Odd numbers"+ " "+ "="+ " "+ arr[i]);
		document.write("<br>");
		count++;
	}
}
document.write("No.of Odd Numbers"+ " "+ "="+ " "+count);
	