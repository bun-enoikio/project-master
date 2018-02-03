import { action, observable } from 'mobx';
import { asyncAction } from 'mobx-utils';
import axios, { AxiosResponse } from 'axios';

export class MainStore {
  @observable showRecallInfo: boolean = false;
  @observable recallResult= [];
  @observable vinNumber: string = '';

  @action
  toggleShowRecallInfo() {
    this.showRecallInfo = !this.showRecallInfo;
  }

  @asyncAction
  *searchVinNumber(vinNumber) {
    try {
      const { data }: AxiosResponse = yield axios.get(`https://api.github.com/users/${vinNumber}`);
      this.recallResult = data;
      this.vinNumber = vinNumber;
    } catch(e) {
      this.recallResult = [];
    }
  }
}

export default new MainStore();
