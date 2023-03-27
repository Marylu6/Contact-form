$(document).ready(function () {
    $('#contactForm').submit(function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        $.ajax({
            type: 'POST',
            url: 'send_email.php',
            data: { name: name, email: email, message: message },
            success: function (response) {
                alert('Your message has been sent successfully!');
                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
            },
            error: function (error) {
                alert('There was an error sending your message. Please try again later.');
            }
        });
    });
});
