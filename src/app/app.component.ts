import { Component } from '@angular/core';
import { ServerService } from './server.service';
import { Http, Response }  from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private serverService:ServerService){}
   
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
  private generateCap(){
    return Math.round(Math.random()*100);
  }

 show:boolean  = false;

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];


  onAddServer(name: string) {
    if(name == ''){
      this.show = true;
    }else{
      this.servers.push({
      name: name,
      capacity:this.generateCap(),
      id: this.generateId()
    });
      this.show = false;
    }
  }


  removeServer(index:number){
    this.servers.splice(index,1);
  }


  onSave(){
    this.serverService.storeServers(this.servers)
        .subscribe(
          (response: Response) => console.log(response),
          (error) => console.log(error)
        );
  }

  onGet(){
    this.serverService.getServers()
        .subscribe(
          (servers:any[]) => this.servers = servers,
          (error) => console.log(error)
    );
  }
  
}
