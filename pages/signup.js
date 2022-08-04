import Link from "next/link";

const Index = () => {
    return (
        <>
            <div class="authincation section-padding">
                <div class="container h-100">
                    <div class="row justify-content-center h-100 align-items-center">
                        <div class="col-xl-5 col-md-6">
                            <div class="mini-logo text-center my-5">
                                <Link href="/landing"><a><img src="./images/logo.png" alt="" /></a></Link>
                            </div>
                            <div class="auth-form card">
                                <div class="card-header justify-content-center">
                                    <h4 class="card-title">Sign up your account</h4>
                                </div>
                                <div class="card-body">
                                    <form method="post" name="myform" class="signup_validate">
                                        <div class="mb-3">
                                            <label>Username</label>
                                            <input type="text" class="form-control" placeholder="username" name="username" />
                                        </div>
                                        <div class="mb-3">
                                            <label>Email</label>
                                            <input type="email" class="form-control" placeholder="hello@example.com"
                                                name="email" />
                                        </div>
                                        <div class="mb-3">
                                            <label>Password</label>
                                            <input type="password" class="form-control" placeholder="Password"
                                                name="password" />
                                        </div>
                                        <div class="text-center mt-4">
                                            <button type="submit" class="btn btn-success w-100">Sign up</button>
                                        </div>
                                    </form>
                                    <div class="new-account mt-3">
                                        <p>Already have an account?
                                            <Link href="/signin">
                                                <a class="text-primary">Sign in</a>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;