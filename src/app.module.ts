import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembersModule } from './members/members.module';
import { ReservationsModule } from './reservations/reservations.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: '0000',
			database: 'nestjs',
			entities: [__dirname + '/**/*.entity{.ts,.js}'],
			synchronize: false,
			migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
		}),
		MembersModule,
		ReservationsModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
