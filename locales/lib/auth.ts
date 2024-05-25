/*
 * Copyright (c) 2023 - 2024 drolx Labs
 *
 * Licensed under the Business Source License 1.1 and Trace Source Available License 1.0
 * you may not use this file except in compliance with the License.
 * Change License: Reciprocal Public License 1.5
 *     https://mariadb.com/bsl11
 *     https://trace.ng/licenses/license-1-0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Author: Godwin peter .O (me@godwin.dev)
 * Created At: Friday, 15th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Sat May 25 2024
 */

export default {
  opt: 'OTP',
  username: 'Username',
  password: 'Password',
  signIn: 'Sign In',
  signOut: 'Sign Out',
  sendOtp: '@:shared.send @:auth.otp',
  enterOtp: '@:shared.enter @:auth.otp',
  resendOtp: '@:shared.resend @:auth.otp',
  otpChoice: '@:auth.otp @:shared.choice',
  usernameOrEmail: 'Username or Email',
  verifyOtp: '@:shared.verify @:auth.otp',
  recoveryNewPassword: '@:shared.new @:auth.password',
  recoveryConfirmPassword: '@:shared.confirm @:auth.password',
  forgotPassword: '@:shared.forgot @:auth.password',
  updatePassword: '@:shared.update @:auth.password',
  linkedAccount: '@:shared.linked @:shared.account',
  newHere: '@:shared.new @:shared.hereQuestion',
  welcomeBack: '@:shared.welcome @:shared.back',
  continueSignin: 'Sign in to continue',
  createAccount: '@:shared.create @:shared.account',
  createAnAccount: '@:shared.create @:shared.an @:shared.account',
  passwordResetEmail: '@:shared.reset @:shared.via @:shared.email',
  passwordResetSms: '@:shared.reset @:shared.via @:shared.sms',
  dintRecieveCode: "Didn't recieve a code?",
  recoveryOtpSent: 'A 4 digit OTP has been sent to',
  recoveryNote:
    "Don't worry it happens!. please enter the email associated with your account.",
  recoveryActionNote: 'Please select option to send OTP for password reset',
  recoveryOptionEmail:
    'Password reset OTP will be sent to your registered email address.',
  recoverySmsOption:
    'Password reset OTP will be sent to your registered mobile number.',
};
