import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserAuthority } from './userAuthority.entity';

@Entity('user', {schema: 'slider'})
export class User{
    @PrimaryGeneratedColumn({ type: 'int', name:'id' })
    id: number;

    @Column('varchar', { name: 'kakao_id', length: 45 })
    kakaoId: string;

    @Column('varchar', { name: 'email', length: 100 })
    email: string;

    @Column('varchar', { name: 'name', nullable: true, length: 45 })
    name: string | null;

    @Column('varchar', { name: 'gender', length: 10 })
    gender: string;

    @Column('varchar', { name: 'phone', length: 20 })
    phone: string;

    @Column('varchar', { name: 'birth', length: 10 })
    birth: string;

    @Column('varchar', { name: 'profile_image', nullable: true, length: 200 })
    profileImage: string | null;

    @Column('timestamp', { name: 'created_at', nullable: true, default: () => { 'CURRENT_TIMESTAMP' } })
    createdAt: Date | null;

    @Column('timestamp', { name: 'updated_at', nullable: true, default: () => { 'CURRENT_TIMESTAMP' } })
    updatedAt: Date | null;

    @OneToMany(() => UserAuthority, (userAuthority) => userAuthority.user, {
        eager: true,
    })
    authorities?: any[];

}