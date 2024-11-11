import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isBefore', async: false })
export class IsBeforeConstraint implements ValidatorConstraintInterface {
  validate(value: any) {
    if (!value) return true;
    const date = new Date(value);
    return date <= new Date();
  }

  defaultMessage() {
    return `Date cannot be in the future`;
  }
}
