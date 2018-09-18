import MobileMenu from './Modules/MobileMenu';
import RevealOnScroll from './Modules/RevealOnScroll';
import StickyHeader from './Modules/StickyHeader';
import Modal from './Modules/Modal';
import $ from 'jquery';

var mobileMenu = new MobileMenu(); 
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();