import { UniqueEntityId } from './value-objects/unique-entity-id';

interface UserProps {
  name: string;
  email: string;
  password: string;
}

export class User {
  private props: UserProps;
  private _id: UniqueEntityId;

  private constructor(props: UserProps, id?: string) {
    this.props = props;
    this._id = new UniqueEntityId(id);
  }

  static create(props: UserProps, id?: string) {
    const user = new User(props, id);
    return user;
  }

  get id(): UniqueEntityId {
    return this._id;
  }

  get name(): string {
    return this.props.name;
  }

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }

  changeName(name: string): void {
    this.props.name = name;
  }

  changeEmail(email: string): void {
    this.props.email = email;
  }
}
