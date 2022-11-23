import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hs = 0;
  wf = 0;

  originalMonthValue: any;
  roundedMonthValue: any;
  updatedRoundedMonthValue: any;
  updatedMonthValue: any;

  form: any = new FormGroup({
    hs_c: new FormControl(100),
    wf_c: new FormControl(200),
  });

  calc(type: any) {
    let hs = this.form.value.hs_c;
    let wf = this.form.value.wf_c;

    if (type == 'an') {
      console.log('#########annual#########');

      if (this.originalMonthValue == undefined) {
        console.log('bbbb');
        this.form.patchValue({
          hs_c: hs * 12,
          wf_c: wf * 12,
        });
      }

      if (this.originalMonthValue != undefined) {
        // this.form.patchValue(this.originalMonthValue);
        console.log('vvvv');
        let ff = this.originalMonthValue;
        // var obj: { [k: string]: any } = {};
        console.log('maths');
      }

      // if (this.form.dirty) {
      //   console.log('dirty');
      // } else {
      //   console.log('not');
      // }

      console.log('originalMonthValue: ', this.originalMonthValue);

      this.updatedMonthValue = this.form.value;
      console.log('updatedMonthValue: ', this.updatedMonthValue);

      console.log('updatedRoundedMonthValue', this.updatedRoundedMonthValue);
    } else {
      console.log('######month#######');

      this.form.patchValue({
        hs_c: hs / 12,
        wf_c: wf / 12,
      });

      this.originalMonthValue = this.form.value;
      // let ff = this.originalMonthValue;
      // for (let key in ff) {
      //   console.log(key, ff[key]);
      //   this.form.patchValue({
      //     key: ff[key] * 12,
      //   });
      // }
      // console.log('maths', this.form.value);
      console.log('originalMonthValue', this.originalMonthValue);

      this.form.patchValue({
        hs_c: parseFloat((hs / 12).toFixed(2)),
        wf_c: parseFloat((wf / 12).toFixed(2)),
      });

      this.roundedMonthValue = this.form.value;
      console.log('roundedMonthValue: ', this.roundedMonthValue);

      if (this.form.dirty) {
        console.log('month dirty');
        this.updatedRoundedMonthValue = this.form.value;
        console.log('updatedRoundedMonthValue', this.updatedRoundedMonthValue);
      } else {
        console.log('month not dirty');
        this.updatedRoundedMonthValue = 'notChanged';
      }
    }
  }
}
