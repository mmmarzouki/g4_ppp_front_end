import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DocType } from '../../../../../../../models/types/doctype';
import { Project } from '../../../../../../../models/project';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    @Input()
    project: Project;

    constructor(public activeModal: NgbActiveModal) { }

    type = '';
    selectedItem: '';
    isSelected = false;
    types = [];
    foundItems = [];


    docTypeValues() {
        return Object.keys(DocType).filter(
            (type) => isNaN(<any>type) && type !== 'values'
        );
    }
    ngOnInit() {
        let array = this.docTypeValues();
        array.forEach(element => {
            this.types.push(element.replace(/([A-Z])/g, ' $1').trim());
        });
    }
    selectType(item) {
        this.selectedItem = item;
        this.isSelected = true;
    }
    resetType() {
        this.selectedItem = '';
        this.isSelected = false;
    }

    search() {
        if (this.type === '') {
            this.foundItems = [];
            return;
        }
        let search = this.type.toLowerCase().replace(' ', '');
        this.foundItems = this.types.filter(el => {
            return el.toLowerCase().includes(search);
        });
    }

}
