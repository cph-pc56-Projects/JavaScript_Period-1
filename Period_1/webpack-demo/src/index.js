import _ from 'lodash';
import './style.css';
import Icon from './please.jpg';

function component() {
    var element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    //Add the image to our current div
    // var myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());