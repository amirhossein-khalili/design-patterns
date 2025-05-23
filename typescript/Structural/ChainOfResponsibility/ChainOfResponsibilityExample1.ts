// 🧪 تمرین: سیستم اعتبارسنجی ثبت‌نام کاربر
// فرض کن می‌خوای یه سیستم اعتبارسنجی برای ثبت‌نام کاربر بسازی. مراحل زیر باید طی بشه:
// بررسی اینکه ایمیل وارد شده معتبره (فرمت ایمیل).
// بررسی اینکه رمز عبور حداقل ۸ کاراکتر داره.
// بررسی اینکه کاربر قبلاً ثبت‌نام نکرده (مثلاً در یک آرایه ساده وجود نداشته باشه).

interface Validator {
  hasNext();
  validate();
}
class EmailValidator implements Validator {}
class PasswordValidator implements Validator {}
class UniqueUserValidator implements Validator {}
