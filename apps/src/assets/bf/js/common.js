//验证邮箱
function verifyEmail(email){
	return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email) ? true : false;
}

//验证手机号码
function verifyPhone(phone){
	return /^1\d{10}$/.test(phone) ? true : false;
}