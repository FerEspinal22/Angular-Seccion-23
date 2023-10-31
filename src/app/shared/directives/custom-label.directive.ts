import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _fontSize: string = '5px';
  private _errors?: ValidationErrors | null;

  // ? Cambiar color del HTML
  @Input() set color(value: string) {
    this._color = value;
    //Manda a lamar para que se le cambie el color
    this.setStyle();
  }

    // ? Cambiar tamaño de la fuente del HTML
    @Input() set fontSize(value: string) {
      this._fontSize = value;

      this.setFontSize();
    }

     // ? 
    @Input() set errors(value: ValidationErrors | null) {
      this._errors = value;

      console.log( value );
    }

  //Accedemos al elemento HTML en el cual está la directiva
  constructor(private el: ElementRef<HTMLElement>) { 
    //console.log(el);
    this.htmlElement = el;
  }

  ngOnInit(): void {
    console.log('Directiva OnInit');

    this.setStyle();
    this.setFontSize();
  }

  setStyle():void {
    if (!this.htmlElement) return; 

    this.htmlElement.nativeElement.style.color = this._color;
  }

  setFontSize():void {
    if (!this.htmlElement) return; 

    this.htmlElement.nativeElement.style.fontSize = this._fontSize;

  }

}
