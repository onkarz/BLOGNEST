import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-editblog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editblog.component.html',
  styleUrl: './editblog.component.css'
})
export class EditblogComponent {

  id:any;
  blogDetails:any;
  imageUrl: any;

  constructor(private ar:ActivatedRoute, private blog:BlogService, private router:Router){
    this.id = this.ar.snapshot.paramMap.get("id");
    console.log(this.id);

    this.blog.getBlogById(this.id).subscribe((data:any)=>{
      console.log(data);
      this.blogDetails = data;
      console.log("Blog Details",this.blogDetails);
    })

  }



  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result; // Store the image data
        this.blogDetails.imageUrl = this.imageUrl as string;
      };
      reader.readAsDataURL(file);
    }
  }

  update(){

    this.blog.updateBlog(this.id, this.blogDetails).subscribe((data:any)=>{
      console.log(data);
      alert("Blog Updated Successfully");
      this.router.navigate(["/blogList"])
    })

  }

}
