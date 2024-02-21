export type UserPropos = {
    name: string;
    document: string;
    email: string;
    password: string;
};

export class User {
    public props: Required<UserPropos>;
  
    private constructor(props: UserPropos) {
      if (!props) {
        return;
      }
    }
  
    static create(props: UserPropos) {
      return new User(props);
    }

    get name() {
        return this.props.name;
    }
    private set name(value: string) {
        this.props.name = value;
    }

    get document() {
        return this.props.document;
    }
    private set document(value: string) {
        this.props.document = value;
    }

    get email() {
        return this.props.email;
    }
    private set email(value: string) {
        this.props.email = value;
    }

    get password() {
        return this.props.password;
    }
    private set password(value: string) {
        this.props.password = value;
    }

    toJSON() {
        return this.props
    }
}