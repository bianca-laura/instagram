import LayoutAdmin from "../components/layout/LayoutAdmin";
import { Accordion, Card, Tab, Tabs } from "react-bootstrap";
import Link from "next/link"
import dynamic from 'next/dynamic';
const Popup = dynamic(
    () => import('../components/elements/popup'),
    { ssr: false }
)


const Index = () => {
    return (
        <>
            <LayoutAdmin pageClass={"admin"}>

                <div class="row">
                    <div class="col-xl-5 col-lg-12 col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="buy-sell-widget">
                                    <ul class="nav nav-tabs">
                                        <li class="nav-item"><a class="nav-link active">Buy</a>
                                        </li>
                                        <li class="nav-item"><a class="nav-link">Sell</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content tab-content-default">
                                        <div class="tab-pane fade show active" role="tabpanel">
                                            <form class="currency_validate">
                                                <div class="mb-3">
                                                    <label class="me-sm-2">Currency</label>
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <label class="input-group-text"><i
                                                                class="cc BTC-alt"></i></label>
                                                        </div>
                                                        <select name='currency' class="form-control">
                                                            <option value="">Select</option>
                                                            <option value="bitcoin">Bitcoin</option>
                                                            <option value="litecoin">Litecoin</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="mb-3">
                                                    <label class="me-sm-2">Payment Method</label>
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <label class="input-group-text"><i
                                                                class="fa fa-bank"></i></label>
                                                        </div>
                                                        <select class="form-control" name="method">
                                                            <option value="">Select</option>
                                                            <option value="bank">Bank of America ********45845</option>
                                                            <option value="master">Master Card ***********5458</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="mb-3">
                                                    <label class="me-sm-2">Enter your amount</label>
                                                    <div class="input-group">
                                                        <input type="text" name="currency_amount" class="form-control"
                                                            placeholder="0.0214 BTC" />
                                                        <input type="text" name="usd_amount" class="form-control"
                                                            placeholder="125.00 USD" />
                                                    </div>
                                                    <div class="d-flex justify-content-between mt-3">
                                                        <p class="mb-0">Monthly Limit</p>
                                                        <h6 class="mb-0">$49750 remaining</h6>
                                                    </div>
                                                </div>
                                                <a
                                                    class="btn btn-success w-100">Exchange
                                                    Now</a>

                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <p class="p-4">Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate
                            suscipit explicabo voluptas eos in tenetur error temporibus dolorum. Nulla!</p>
                    </div>
                    <div class="col-xl-7 col-lg-12 col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="buyer-seller">
                                    <div class="d-flex justify-content-between mb-3">
                                        <div class="buyer-info">
                                            <div class="d-flex align-items-center ">
                                                <img class="me-3" src="./images/profile/2.png" alt="" width="50" />
                                                <div class="flex-grow-1">
                                                    <h4>Buyer</h4>
                                                    <h5>Michael John</h5>
                                                    <Link href="#"><a>hello@example.com</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="seller-info text-right">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-grow-1">
                                                    <h4>Seller</h4>
                                                    <h5>John Doe</h5>
                                                    <Link href="#"><a>hello@example.com</a></Link>
                                                </div>
                                                <img class="ms-3" src="./images/profile/1.png" alt="" width="50" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-responsive">
                                        <table class="table">
                                            <tbody>
                                                <tr>
                                                    <td><span class="text-primary">You are selling</span></td>
                                                    <td><span class="text-primary">0.00254 BTC</span></td>
                                                </tr>
                                                <tr>
                                                    <td>Payment Method</td>
                                                    <td>Bank of America Bank ***********5245</td>
                                                </tr>
                                                <tr>
                                                    <td>Exchange Rate</td>
                                                    <td>0.00212455 BTC</td>
                                                </tr>
                                                <tr>
                                                    <td>Fee</td>
                                                    <td>$28.00 USD</td>
                                                </tr>
                                                <tr>
                                                    <td>Total</td>
                                                    <td>$854.00 USD</td>
                                                </tr>
                                                <tr>
                                                    <td>Vat</td>
                                                    <td>
                                                        <div class="text-danger">$25.00 USD</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td> Sub Total</td>
                                                    <td> $1232.00 USD</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">FAQ</h4>
                            </div>
                            <div class="card-body">
                                <div id="accordion-faq" class="accordion">
                                    <div class="card">
                                        <div class="card-header">
                                            <h5 class="mb-0 collapsed c-pointer" data-toggle="collapse"
                                                data-target="#collapseOne1" aria-expanded="false"
                                                aria-controls="collapseOne1"><i class="fa" aria-hidden="true"></i>What
                                                Shipping Methods are Available?</h5>
                                        </div>
                                        <div id="collapseOne1" class="collapse show" data-parent="#accordion-faq">
                                            <div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high
                                                life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                                                cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                eiusmod.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <h5 class="mb-0 collapsed c-pointer" data-toggle="collapse"
                                                data-target="#collapseTwo2" aria-expanded="false"
                                                aria-controls="collapseTwo2"><i class="fa" aria-hidden="true"></i>How
                                                Long Will it Take To Get My Package?</h5>
                                        </div>
                                        <div id="collapseTwo2" class="collapse show" data-parent="#accordion-faq">
                                            <div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high
                                                life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                                                cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                eiusmod.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <Popup />
                    </div>
                </div>

            </LayoutAdmin>
        </>
    );
};

export default Index;