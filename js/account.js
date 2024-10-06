var topinfo = $("h2.top-info-header").text();
var isCourseOpen = false;
//Switch to Account Settings
$("a.accountservice").click(()=>{
    $("div.course-list").fadeOut(200);
    $("div.account-settings").fadeIn(200);
    $("h2.top-info-header").text("Account Settings");
    if (isCourseOpen){
        $("a.backuserdashboard").click();
    };
})

//Switch to Course List
$("a.account-settings-back").click(()=>{
    $("div.course-list").fadeIn(200);
    $("div.account-settings").fadeOut(200);
    $("h2.top-info-header").text(topinfo);
})

//Add or Enroll Course Modal
$(".addenrolcourse").click(()=>{
    if ($("p.addenrolcourse-text").attr("id")==="enroltrue"){
        $("div.modal-content h4").text("Enter Course Code");
        $("div.course-name").remove();
        $("div.banner-select").remove();
        $("div.input-field").css('margin', '0');
    } else {
        $("div.modal-content h4").text("Add Course");
    }
    $("div.modal").fadeIn(100);
})

$("a.addenrol-modal-close").click(() => {
    let formData = new FormData();
    formData.append("coursecode", $("input[name='coursecode']").val());
    formData.append("coursename", $("input[name='coursename']").val());
    formData.append("banner", $("input[name='coursebanner']")[0].files[0]); // Get the file
    formData.append("instructorname", $("span.display-name").text());
    formData.append("authorize", "gradeplus");

    $.ajax({
        url: "services/add-course.php",
        type: "POST",
        data: formData,
        processData: false, // Prevent jQuery from processing the data
        contentType: false, // Prevent jQuery from overriding the content type
        dataType : "json",
        success: (response) => {
            if (response["success"] != 1) {
                alert("500 - Server Error")
            }
            $("div.modal").fadeOut(100);
            $("div.input-field input").val("");
        }
    });
})

$("a.addenrol-modal-cancel").click(() => {
    $("div.modal").fadeOut(100);
    $("div.input-field input").val("");
})

//Opening a Course
$("div.course-card").click((event) => {
    isCourseOpen = true;
    $("ul.side-nav").animate({left: '0'}, {
        duration: 100,
        easing: 'swing'
    });
    console.log(event);
    var coursecode = $(event.currentTarget).find("span.card-title").text();
    $("p.side-nav-course-code").text(coursecode);
    $("div.courseholder").fadeOut(200);
    $("div.coursedash").fadeIn(400).css("display", "flex");
    $("h3.coursedash-header").text("Assignments");
});

//Closing a Course
$("a.backuserdashboard").click(()=>{
    isCourseOpen = false;
    $("ul.side-nav").animate({left: '-20rem'}, {
        duration: 100,
        easing: 'swing'
    });
    $("div.coursedash").fadeOut(200,()=>{
        $("div.courseholder").fadeIn(200);
    });
})

//Testing Only
//$("div.course-card").click();

//Assignments
$("a.assignments").click(()=>{
    $("h3.coursedash-header").text("Assignments");
})

//Grades
$("a.grades").click(()=>{
    $("h3.coursedash-header").text("Grades");
})

//Peer Reviews
$("a.peer-reviews").click(()=>{
    $("h3.coursedash-header").text("Peer Reviews");
})

//Discussions
$("a.discussions").click(()=>{
    $("h3.coursedash-header").text("Discussions");
})

//Classlist
$("a.classlist").click(()=>{
    $("h3.coursedash-header").text("Classlist");
})

//Settings
$("a.csettings").click(()=>{
    $("h3.coursedash-header").text("Course Settings");
})

//Finish Loading
$(window).on("load", () => {
    $("div.loader").fadeOut(200);
    setTimeout(() => {
        $("div.mainapp").fadeIn(200);
    }, 200);
});