document.addEventListener('DOMContentLoaded', () => {
  fetch('data/activity.json')
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData);
      let activity_object = jsonData;
      document.querySelector('.image').innerHTML = `<img id="target_image" src="${activity_object.media.image_src}" alt="Image">`;
      document.getElementById('image_container').addEventListener('click', () => {
        window.open(activity_object.media.image_src, '_blank');
      }
      );

      document.getElementById('sentence').textContent = `${activity_object.sentence}`;
      let option_a_div = document.getElementById('option_a_div');
      let option_b_div = document.getElementById('option_b_div');
      let option_c_div = document.getElementById('option_c_div');
      let option_d_div = document.getElementById('option_d_div');

      let option_a_span = document.getElementById('option_a');
      let option_b_span = document.getElementById('option_b');
      let option_c_span = document.getElementById('option_c');
      let option_d_span = document.getElementById('option_d');

      document.getElementById('option_a').textContent = `${activity_object.options.A}`;
      document.getElementById('option_b').textContent = `${activity_object.options.B}`;
      document.getElementById('option_c').textContent = `${activity_object.options.C}`;
      document.getElementById('option_d').textContent = `${activity_object.options.D}`;

      option_a_div.addEventListener('click', () => {
        const userChoice = "A";
        const correctAnswer = activity_object.correct_answer.toUpperCase();
        if (userChoice === correctAnswer) {
          option_a_span.style.backgroundColor = '#8CC63F';
          option_a_span.style.color = 'white';
          option_a_div.style.backgroundColor = '#8CC63F';
          setTimeout(() => {
            location.reload();
          }, 2000);
        } else {
          option_a_span.style.backgroundColor = 'white';
          option_a_span.style.color = '#D32B45';
          option_a_span.style.textDecoration = 'line-through';
        }
      });

      option_b_div.addEventListener('click', () => {
        const userChoice = "B";
        const correctAnswer = activity_object.correct_answer.toUpperCase();
        if (userChoice === correctAnswer) {
          option_b_span.style.backgroundColor = '#8CC63F';
          option_b_span.style.color = 'white';
          option_b_div.style.backgroundColor = '#8CC63F';
          setTimeout(() => {
            location.reload();
          }, 2000);
        } else {
          option_b_span.style.backgroundColor = 'white';
          option_b_span.style.color = '#D32B45';
          option_b_span.style.textDecoration = 'line-through';
        }
      }
      );

      option_c_div.addEventListener('click', () => {
        const userChoice = "C";
        const correctAnswer = activity_object.correct_answer.toUpperCase();
        if (userChoice === correctAnswer) {
          option_c_span.style.backgroundColor = '#8CC63F';
          option_c_span.style.color = 'white';
          option_c_div.style.backgroundColor = '#8CC63F';
          setTimeout(() => {
            location.reload();
          }, 2000);
        } else {
          option_c_span.style.backgroundColor = 'white';
          option_c_span.style.color = '#D32B45';
          option_c_span.style.textDecoration = 'line-through';
        }
      });

      option_d_div.addEventListener('click', () => {
        const userChoice = "D";
        const correctAnswer = activity_object.correct_answer.toUpperCase();
        if (userChoice === correctAnswer) {
          option_d_span.style.backgroundColor = '#8CC63F';
          option_d_span.style.color = 'white';
          option_d_div.style.backgroundColor = '#8CC63F';
          setTimeout(() => {
            location.reload();
          }, 2000);
        } else {
          option_d_span.style.backgroundColor = 'white';
          option_d_span.style.color = '#D32B45';
          option_d_span.style.textDecoration = 'line-through';
        }
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});