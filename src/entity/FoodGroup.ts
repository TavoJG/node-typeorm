import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class FoodGroup {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;
}
