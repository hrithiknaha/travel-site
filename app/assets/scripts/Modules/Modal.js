import $ from 'jquery';

class Modal{
	constructor(){
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}

	events(){
		//Clicking open Modal
		this.openModalButton.click(this.openModal.bind(this));
		
		//Clicking X
		this.closeModalButton.click(this.closeModal.bind(this));
		
		//any Key
		$(document).keyup(this.keyPressHandler.bind(this));

	}

	keyPressHandler(e){
		if(e.keyCode==27){
			this.closeModal();
		}
	}

	openModal()
	{
		this.modal.addClass("modal--is-visible");
		return false;
	}

	closeModal(){
		this.modal.removeClass("modal--is-visible");
	}

}

export default Modal;