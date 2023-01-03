import { bindable, bindingMode, computedFrom } from 'aurelia-framework';

export abstract class PhosphorIcon {

  private __svg: SVGSVGElement;

  @bindable({ defaultBindingMode: bindingMode.fromView })
  public color = '#000000';
  @bindable({ defaultBindingMode: bindingMode.fromView })
  public size = "1em";
  @bindable({ defaultBindingMode: bindingMode.fromView })
  public weight = "regular";
  @bindable({ defaultBindingMode: bindingMode.fromView })
  public mirrored = false;

  private mirroredChanged(): void {
    
    if (!this.__svg) return;

    if (this.mirrored.toString().toLowerCase() === 'true' || this.mirrored.toString() === '') {
      this.mirrored = true;
    } else {
      this.mirrored = false;
    }

    if (this.mirrored) {
      this.__svg.setAttribute("transform", "scale(-1,1)");
    } else {
      this.__svg.removeAttribute("transform");
    }
  }
  
  private bind(): void {
    this.mirroredChanged();
  }

  @computedFrom('weight')
  private get isBold(): boolean { return this.weight.toLowerCase() === "bold"; }
  
  @computedFrom('weight')
  private get isDuotone(): boolean { return this.weight.toLowerCase() === "duotone"; }
  
  @computedFrom('weight')
  private get isFill(): boolean { return this.weight.toLowerCase() === "fill"; }
  
  @computedFrom('weight')
  private get isLight(): boolean { return this.weight.toLowerCase() === "light"; }
  
  @computedFrom('weight')
  private get isThin(): boolean { return this.weight.toLowerCase() === "thin"; }
  
  @computedFrom('weight')
  private get isRegular(): boolean { return this.weight.toLowerCase() === "regular"; }

}
