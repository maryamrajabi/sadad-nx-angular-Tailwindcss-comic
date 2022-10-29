import { Directive, ElementRef, NgModule, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Directive({
  selector: '[rtl]',
})
export class RtlDirective implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  constructor(private el: ElementRef, public translate: TranslateService) {
    el.nativeElement.style.textAlign =
       translate.currentLang === 'fa'
        ? 'right'
        : 'left';
    el.nativeElement.style.direction =
      translate.currentLang === 'fa'
        ? 'rtl'
        : 'ltr';
  }
  ngOnInit() {
    this.subscription = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.el.nativeElement.style.textAlign =
           event.lang === 'fa' ? 'right' : 'left';
        this.el.nativeElement.style.direction =
           event.lang === 'fa' ? 'rtl' : 'ltr';
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [RtlDirective],
  exports: [RtlDirective],
})
export class RtlDirectiveModule {}
