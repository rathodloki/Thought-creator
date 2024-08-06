document.addEventListener('DOMContentLoaded', function() {

    getRandomImage();
    document.querySelectorAll('.dropdown-item').forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const align = event.target.getAttribute('data-align');
            handleAlignSelection(align);
        });
    });

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl,{
        trigger: 'hover'
      })
    })


});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function getRandomImage() {
    try{
    const textarea = document.querySelector('.input');
    let random_id =  Math.floor((Math.random() * 1000) + 1);
    const imageUrl = 'https://picsum.photos/id/'+random_id+'/1080?'+ new Date().getTime();
    document.getElementById('refresh-image-icon').classList.add('fa-spin');
    document.getElementById('refresh-image-button').classList.add('placeholder-wave');
    await sleep(500);
    textarea.style.background = "url("+imageUrl+")"
    textarea.style.backgroundSize = "cover";
    textarea.style.backgroundRepeat = "no-repeat";
    textarea.style.backgroundPosition = "center";
    document.getElementById('refresh-image-icon').classList.remove('fa-spin');
    document.getElementById('refresh-image-button').style.background = "url("+imageUrl+")"
    document.getElementById('refresh-image-button').style.backgroundSize = "cover";
    document.getElementById('refresh-image-button').classList.remove('placeholder-wave');
    
    } catch (error) {
        console.error("Image loading failed, retrying...", error);
        await getRandomImage();
    }
}


function downloadAsImage() {
    var textArea = document.querySelector("#text-area");
    document.querySelector('.download').classList.add('placeholder-wave');

    domtoimage.toPng(textArea)
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'thought.jpeg';
            link.click();
            document.querySelector('.download').classList.remove('placeholder-wave');
        })
        .catch(function (error) {
            console.error('Error generating image:', error);
        });
}

let rangeButtonClciked = false

function rangevisible(){
    rangeButtonClciked = true
    var rangeInput = document.querySelector("#rangeInput")
    var dropdownContent = document.querySelector(".dropdown-content")

    rangeInput.style.display = (rangeInput.style.display === "block") ? "none" : "block";
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}

const textarea = document.querySelector('.input');
const rangeInput = document.getElementById('rangeInput');
var dropdownContent = document.querySelector(".dropdown-content");
rangeInput.addEventListener('input', () => {
    const maxRange = 90;
    const reversedValue = maxRange - rangeInput.value;
    textarea.style.paddingTop = reversedValue + "%"
});

let isRangeInputVisible = false;

document.querySelector('#rangeButton').addEventListener('click', function(event) {
    event.stopPropagation();
    var rangeInput = document.querySelector("#rangeInput");
    var dropdownContent = document.querySelector(".dropdown-content");

    isRangeInputVisible = !isRangeInputVisible;
    rangeInput.style.display = isRangeInputVisible ? "block" : "none";
    dropdownContent.style.display = isRangeInputVisible ? "block" : "none";
});

document.addEventListener('click', function(event) {
    var rangeInput = document.querySelector("#rangeInput");
    var dropdownContent = document.querySelector(".dropdown-content");
    var rangeButton = document.querySelector('#rangeButton');

    var isClickInside = rangeInput.contains(event.target) ||
                        dropdownContent.contains(event.target) ||
                        rangeButton.contains(event.target);

    if (!isClickInside) {
        if (isRangeInputVisible) {
            isRangeInputVisible = false;
            rangeInput.style.display = "none";
            dropdownContent.style.display = "none";
        }
    }
});
const root = document.documentElement; 
function removeGlowingEffectFromAll() {
    const elements = document.querySelectorAll('.glowDisabled');
    elements.forEach(element => {
      element.classList.remove('glow_class'); 
    });
  }
  
  function addGlowingEffect() {
    const elements = document.querySelectorAll('.glowDisabled');
    elements.forEach(element => {
      element.classList.add('glow_class'); 
    });
  }
  

$( document ).ready(function() {
    jQuery('.player').on('click', function () {

        if(jQuery(this).hasClass('active')) {
            jQuery(this).find('audio').trigger('pause');
            const elements = document.querySelectorAll('.glowDisabled');
            removeGlowingEffectFromAll();
            jQuery(this).removeClass('active');
        } else {
            jQuery(this).find('audio').trigger('play');
            jQuery(this).addClass('active');
            addGlowingEffect();

        }
    });

});

document.addEventListener('DOMContentLoaded', function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl, {
        html: true,
        customClass: 'custom-popover'
      })
    })
  });