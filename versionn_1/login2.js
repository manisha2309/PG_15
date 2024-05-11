
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
function validateEmail(emailId)
{
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(emailId.value.match(mailformat))
    {
    document.form1.text1.focus();
    return true;
    }
    else
    {
    alert("Invalid email address.");
    document.form1.text1.focus();
    return false;
    }
    }

