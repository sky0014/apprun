import app from '../../index-zero';
//import * as $ from "jquery";
declare var $: any;

let $element;
app.on('/', () => $element.load('router-components/home.html'));
export default (element) => $element = $(element);