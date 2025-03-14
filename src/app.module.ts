import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UploadModule } from './upload/upload.module';


@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost/nest'), UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
