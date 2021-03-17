import {
    BaseEntity,
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryColumn,
    PrimaryGeneratedColumn
} from "typeorm";
import {Naringsamne} from "./Naringsamne";
import {Naringsvarde} from "./Naringsvarde";

@Entity()
export class Livsmedel extends BaseEntity{

    @PrimaryColumn({type: "varchar", length: 255})
    namn: string;

    @Column({type: "int"})
    nummer: number;

    @Column({nullable: true, type: "varchar", length: 255})
    huvudgrupp: string;

    @OneToMany(() => Naringsvarde, naringsvarde => naringsvarde.livsmedel, {eager: true, cascade: true})
    naringsvarden: Naringsvarde[];

}