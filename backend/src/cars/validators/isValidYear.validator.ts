import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isValidYear', async: false })
export class IsValidYearConstraint implements ValidatorConstraintInterface {
  validate(dateString: string, args: ValidationArguments) {
    const year = new Date(dateString).getFullYear();

    if (year < 1900) {
      args.constraints.push('registrationDate');
      return false;
    }
    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} must have a year greater than or equal to 1900.`;
  }
}
