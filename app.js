const signIn = document.getElementById("signIn")
const signUp = document.getElementById("signUp")

const cover = document.getElementById("cover")
const coverbtn = document.getElementById("coverbtn")

const title = document.getElementById("title")
const para = document.getElementById("para")

const user1 = document.getElementById("user1")
const email1 = document.getElementById("email1")
const pas1 = document.getElementById("pas1")

const user2 = document.getElementById("user2")
const pas2 = document.getElementById("pas2")

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")

const remember = document.getElementById("remember")
const forgot = document.getElementById("forgot")

const pas1Icon = document.getElementById("pas1Icon")
const pas2Icon = document.getElementById("pas2Icon")

const user1Icon = document.getElementById("user1Icon")
const email1Icon = document.getElementById("email1Icon")

const mobileSwitch =document.getElementById("mobileSwitch")
const mobileSwitchSignIn = document.getElementById("mobileSwitchSignIn")
const terms = document.getElementById("terms")

const ruleLength =  document.getElementById("ruleLength")
const ruleUpper =document.getElementById("ruleUpper")
const ruleLower = document.getElementById("ruleLower")
const ruleNumber = document.getElementById("ruleNumber")
const user1Message = document.getElementById("user1Message")

const email1Message = document.getElementById("email1Message")
const pas1Message =  document.getElementById("pas1Message")
const user2Message = document.getElementById("user2Message")

const pas2Message = document.getElementById("pas2Message")
const termsMessage = document.getElementById("termsMessage")
const successBox = document.getElementById("successBox")



let flag = true

let successTimer




let usersafe = /^[a-zA-Z0-9]{3,16}$/

let emailsafe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

let passwordsafe = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}$/


/////////////////////// با موفقیت //////////////////////

function showSuccess(text) {

    clearTimeout(successTimer)

    successBox.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${text}`

    successBox.classList.remove(  "opacity-0", "invisible", "-translate-y-5")

    successBox.classList.add( "opacity-100", "visible",  "translate-y-0" )

    successTimer = setTimeout(() => {

        successBox.classList.remove( "opacity-100", "visible","translate-y-0")

        successBox.classList.add( "opacity-0", "invisible", "-translate-y-5" )

    }, 2500)

}

///////////////رفتن به حالت ثبت نام ///////////////////////////////

function showSignup() {

    flag = false

    signIn.classList.add( "-translate-x-full",  "opacity-0", "pointer-events-none")

    signUp.classList.remove( "opacity-0", "pointer-events-none", "z-[1]")

    signUp.classList.add( "opacity-100", "pointer-events-auto", "z-[5]" )

    cover.classList.remove("left-1/2")
    cover.classList.add("left-0")

    if (window.innerWidth <= 850) {

        signIn.classList.add("hidden")
        signIn.classList.remove("flex")

        signUp.classList.remove("hidden")
        signUp.classList.add("flex")

    }

    coverbtn.innerHTML =`Sign In
        <i class="fa-solid fa-arrow-left"></i>`

    title.innerHTML = "Welcome Back!"

    para.innerHTML =`To keep connected with us
        <br>
        please login with your personal info.`

}

/////////////////////رفتن به حالت ورود ///////////////////////

function showLogin() {

    flag = true

    signIn.classList.remove( "-translate-x-full", "opacity-0", "pointer-events-none")

    signUp.classList.remove( "opacity-100", "pointer-events-auto","z-[5]" )

    signUp.classList.add( "opacity-0", "pointer-events-none", "z-[1]" )

    cover.classList.remove("left-0")
    cover.classList.add("left-1/2")

    if (window.innerWidth <= 850) {

        signUp.classList.add("hidden")
        signUp.classList.remove("flex")

        signIn.classList.remove("hidden")
        signIn.classList.add("flex")

    }

    coverbtn.innerHTML = `Create Account
        <i class="fa-solid fa-arrow-right"></i>`

    title.innerHTML ="Hello Again!"

    para.innerHTML = `Create your account and
        <br>
        start your journey.`

}

////////////////////دکمه روکش دار //////////////////////

coverbtn.addEventListener("click", () => {

    if (flag === true) {  showSignup()

    } else {

        showLogin()
    }

})

/////////////دکمه موبایل /////////////////////

mobileSwitch.addEventListener("click", () => {

    showSignup()

})


mobileSwitchSignIn.addEventListener("click", () => {

    showLogin()

})


////////////////نام کاربری //////////////////

user1.addEventListener("input", () => {

    let value = user1.value.trim()


    if (value === "") { user1.classList.remove(
            "border-slate-200",
            "border-green-500",
            "bg-[#f7fff9]"
        )

        user1.classList.add( "border-red-500", "bg-[#fff7f7]")

        user1Icon.innerHTML = "✕"

        user1Icon.classList.remove(  "text-green-500" )

        user1Icon.classList.add( "text-red-500" )

        user1Message.innerHTML =  "Please enter your username."

        user1Message.classList.remove( "text-green-600" )

        user1Message.classList.add( "text-red-500" )

    }

    else if (!usersafe.test(value)) { user1.classList.remove(
            "border-slate-200",
            "border-green-500",
            "bg-[#f7fff9]"
        )

        user1.classList.add(  "border-red-500",  "bg-[#fff7f7]" )

        user1Icon.innerHTML = "✕"

        user1Icon.classList.remove( "text-green-500" )

        user1Icon.classList.add(  "text-red-500" )

        user1Message.innerHTML =  "Username must be 3–16 characters."

        user1Message.classList.remove( "text-green-600")

        user1Message.classList.add(  "text-red-500" )

    }

    else {

        user1.classList.remove( "border-slate-200", "border-red-500","bg-[#fff7f7]"  )

        user1.classList.add( "border-green-500",  "bg-[#f7fff9]" )

        user1Icon.innerHTML = "✓"

        user1Icon.classList.remove(  "text-red-500" )

        user1Icon.classList.add(  "text-green-500"  )

        user1Message.innerHTML =  "Username is valid."

        user1Message.classList.remove( "text-red-500"  )

        user1Message.classList.add(  "text-green-600"  )

    }

})


/////////////////ایمیل /////////////////////////
email1.addEventListener("input", () => {

    let value = email1.value.trim()


    if (value === "") { email1.classList.remove(
            "border-slate-200",
            "border-green-500",
            "bg-[#f7fff9]"
        )

        email1.classList.add( "border-red-500",  "bg-[#fff7f7]" )

        email1Icon.innerHTML = "✕"

        email1Icon.classList.remove(  "text-green-500")

        email1Icon.classList.add( "text-red-500" )

        email1Message.innerHTML = "Please enter your email."

        email1Message.classList.remove(  "text-green-600" )

        email1Message.classList.add(  "text-red-500" )

    }

    else if (!emailsafe.test(value)) { email1.classList.remove(
            "border-slate-200",
            "border-green-500",
            "bg-[#f7fff9]"
        )

        email1.classList.add( "border-red-500", "bg-[#fff7f7]" )

        email1Icon.innerHTML = "✕"

        email1Icon.classList.remove(  "text-green-500" )

        email1Icon.classList.add(  "text-red-500" )

        email1Message.innerHTML = "Please enter a valid email."

        email1Message.classList.remove( "text-green-600" )

        email1Message.classList.add(  "text-red-500"  )

    }

    else { email1.classList.remove(
            "border-slate-200",
            "border-red-500",
            "bg-[#fff7f7]"
        )

        email1.classList.add( "border-green-500", "bg-[#f7fff9]" )

        email1Icon.innerHTML = "✓"

        email1Icon.classList.remove( "text-red-500" )

        email1Icon.classList.add( "text-green-500" )

        email1Message.innerHTML ="Email is valid."

        email1Message.classList.remove( "text-red-500")

        email1Message.classList.add("text-green-600")

    }

})


/////////////////////// پسورد ////////////////////

pas1.addEventListener("input", () => {

    let value =pas1.value


    if (value.length >= 8) { ruleLength.classList.remove(
            "text-slate-400"
        )

        ruleLength.classList.add("text-green-600"  )

        ruleLength.querySelector("i")
            .classList.remove("bg-slate-300")

        ruleLength.querySelector("i")
            .classList.add("bg-green-500")

    }

    else {

        ruleLength.classList.remove( "text-green-600")

        ruleLength.classList.add(  "text-slate-400" )

        ruleLength.querySelector("i")
            .classList.remove("bg-green-500")

        ruleLength.querySelector("i")
            .classList.add("bg-slate-300")

    }


    if (/[A-Z]/.test(value)) {

        ruleUpper.classList.remove( "text-slate-400" )

        ruleUpper.classList.add( "text-green-600" )

        ruleUpper.querySelector("i")
            .classList.remove("bg-slate-300")

        ruleUpper.querySelector("i")
            .classList.add("bg-green-500")

    }

    else {

        ruleUpper.classList.remove(  "text-green-600" )

        ruleUpper.classList.add( "text-slate-400" )

        ruleUpper.querySelector("i")
            .classList.remove("bg-green-500")

        ruleUpper.querySelector("i")
            .classList.add("bg-slate-300")

    }


    if (/[a-z]/.test(value)) {

        ruleLower.classList.remove( "text-slate-400" )

        ruleLower.classList.add( "text-green-600" )

        ruleLower.querySelector("i")
            .classList.remove("bg-slate-300")

        ruleLower.querySelector("i")
            .classList.add("bg-green-500")

    }

    else {

        ruleLower.classList.remove( "text-green-600"  )

        ruleLower.classList.add( "text-slate-400")

        ruleLower.querySelector("i")
            .classList.remove("bg-green-500")

        ruleLower.querySelector("i")
            .classList.add("bg-slate-300")

    }


    if (/[0-9]/.test(value)) {

        ruleNumber.classList.remove( "text-slate-400")

        ruleNumber.classList.add( "text-green-600")

        ruleNumber.querySelector("i")
            .classList.remove("bg-slate-300")

        ruleNumber.querySelector("i")
            .classList.add("bg-green-500")

    }

    else {

        ruleNumber.classList.remove(  "text-green-600" )

        ruleNumber.classList.add( "text-slate-400" )

        ruleNumber.querySelector("i")
            .classList.remove("bg-green-500")

        ruleNumber.querySelector("i")
            .classList.add("bg-slate-300")

    }


    if (value === "") {

        pas1.classList.remove(
            "border-slate-200",
            "border-green-500",
            "bg-[#f7fff9]"
        )

        pas1.classList.add(
            "border-red-500",
            "bg-[#fff7f7]"
        )

        pas1Message.innerHTML =
            "Please enter your password."

        pas1Message.classList.remove(
            "text-green-600"
        )

        pas1Message.classList.add(
            "text-red-500"
        )

    }

    else if (!passwordsafe.test(value)) {

        pas1.classList.remove(
            "border-slate-200",
            "border-green-500",
            "bg-[#f7fff9]"
        )

        pas1.classList.add(
            "border-red-500",
            "bg-[#fff7f7]"
        )

        pas1Message.innerHTML = "Password does not meet the requirements."

        pas1Message.classList.remove(
            "text-green-600"
        )

        pas1Message.classList.add(
            "text-red-500"
        )

    }

    else {

        pas1.classList.remove(
            "border-slate-200",
            "border-red-500",
            "bg-[#fff7f7]"
        )

        pas1.classList.add(
            "border-green-500",
            "bg-[#f7fff9]"
        )

        pas1Message.innerHTML = "Password is valid."

        pas1Message.classList.remove( "text-red-500")

        pas1Message.classList.add( "text-green-600"  )

    }

})

///////////////////نشون دادن رمز عبور /////////////////////

pas1Icon.addEventListener("click", () => {

    if (pas1.type === "password") {

        pas1.type = "text"

        pas1Icon.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`

    }

    else {

        pas1.type = "password"

        pas1Icon.innerHTML = `<i class="fa-regular fa-eye"></i>`

    }

})


pas2Icon.addEventListener("click", () => {

    if (pas2.type === "password") {

        pas2.type = "text"

        pas2Icon.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`

    }

    else {

        pas2.type = "password"

        pas2Icon.innerHTML =  `<i class="fa-regular fa-eye"></i>`

    }

})

///////////////// ایجاد حساب کاربری ///////////////////

btn1.addEventListener("click", (e) => {

    e.preventDefault()


    let username = user1.value.trim()

    let email =  email1.value.trim()

    let password = pas1.value


    let valid = true


    if (!usersafe.test(username)) {

        user1Message.innerHTML = "Please enter a valid username."

        user1Message.classList.remove(
            "text-green-600"
        )

        user1Message.classList.add(
            "text-red-500"
        )

        valid = false

    }


    if (!emailsafe.test(email)) {

        email1Message.innerHTML ="Please enter a valid email."

        email1Message.classList.remove(
            "text-green-600"
        )

        email1Message.classList.add(
            "text-red-500"
        )

        valid = false

    }


    if (!passwordsafe.test(password)) {

        pas1Message.innerHTML ="Please complete the password requirements."

        pas1Message.classList.remove(
            "text-green-600"
        )

        pas1Message.classList.add(
            "text-red-500"
        )

        valid = false

    }


    if (!terms.checked) {

        termsMessage.innerHTML ="Please accept the terms."

        termsMessage.classList.remove(
            "text-green-600"
        )

        termsMessage.classList.add(
            "text-red-500"
        )

        valid = false

    }

    else {

        termsMessage.innerHTML = "Terms accepted ✓"

        termsMessage.classList.remove(
            "text-red-500"
        )

        termsMessage.classList.add(
            "text-green-600"
        )

    }


    if (valid === false) {

        return

    }

/////////////////////ذخیره کردن داده ها //////////////////////

    localStorage.setItem( "username", username )

    localStorage.setItem( "email", email )

    localStorage.setItem( "password", password)


    showSuccess( "Account created successfully ✓" )


    setTimeout(() => {

        showLogin()

        user2.value = username

        user1.value = ""
        email1.value = ""
        pas1.value = ""

        terms.checked = false

        user1Icon.innerHTML = ""
        email1Icon.innerHTML = ""

        user1Message.innerHTML = ""
        email1Message.innerHTML = ""
        pas1Message.innerHTML = ""
        termsMessage.innerHTML = ""

    }, 900)

})


//////////////////////ورود ////////////////////

btn2.addEventListener("click", (e) => {

    e.preventDefault()


    let username =user2.value.trim()

    let password = pas2.value


    let savedUsername =localStorage.getItem("username")

    let savedPassword = localStorage.getItem("password")


    if (username === "") {

        user2Message.innerHTML = "Please enter your username."

        user2Message.classList.remove( "text-green-600" )

        user2Message.classList.add( "text-red-500" )

        return

    }


    if (password === "") {

        pas2Message.innerHTML ="Please enter your password."

        pas2Message.classList.remove( "text-green-600" )

        pas2Message.classList.add("text-red-500" )

        return

    }


    if (savedUsername === null) {

        user2Message.innerHTML = "Please create an account first."

        user2Message.classList.remove( "text-green-600" )

        user2Message.classList.add( "text-red-500" )

        return

    }


    if ( username !== savedUsername || password !== savedPassword) {

        pas2Message.innerHTML ="Username or password is incorrect."

        pas2Message.classList.remove( "text-green-600")

        pas2Message.classList.add( "text-red-500")

        return

    }


    user2Message.innerHTML = "Username verified ✓"

    user2Message.classList.remove( "text-red-500" )

    user2Message.classList.add(
        "text-green-600"
    )


    pas2Message.innerHTML = "Login successful ✓"

    pas2Message.classList.remove( "text-red-500")

    pas2Message.classList.add(
        "text-green-600"
    )


    showSuccess(  "Login successful ✓" )


    if (remember.checked) {

        localStorage.setItem( "rememberedUsername", username )

        localStorage.setItem(
            "rememberedPassword",
            password
        )

    }

})


////////////////////// منو به خاطر بسپار /////////////////////////

let rememberedUsername = localStorage.getItem( "rememberedUsername")

let rememberedPassword = localStorage.getItem( "rememberedPassword" )


if (rememberedUsername !== null) {

    user2.value = rememberedUsername

    pas2.value = rememberedPassword

    remember.checked = true

}


remember.addEventListener("change", () => {

    if (remember.checked === false) {

        localStorage.removeItem(
            "rememberedUsername"
        )

        localStorage.removeItem(
            "rememberedPassword"
        )

    }

})


//////////////////////فراموشی رمز عبور ////////////////////

forgot.addEventListener("click", () => {

    pas2Message.innerHTML = "Password recovery is not available."

    pas2Message.classList.remove(
        "text-green-600"
    )

    pas2Message.classList.add(
        "text-red-500"
    )

})

////////////////////واکنش پرا ///////////////////////////////
window.addEventListener("resize", () => {

    if (window.innerWidth > 850) {

        signIn.classList.remove("hidden")
        signIn.classList.add("flex")

        signUp.classList.remove("hidden")
        signUp.classList.add("flex")

    }

    else {

        if (flag === true) {

            signIn.classList.remove("hidden")
            signIn.classList.add("flex")


            signUp.classList.add("hidden")
            signUp.classList.remove("flex")

        }

        else {

            signIn.classList.add("hidden")
            signIn.classList.remove("flex")

            
            signUp.classList.remove("hidden")
            signUp.classList.add("flex")

        }

    }

})

