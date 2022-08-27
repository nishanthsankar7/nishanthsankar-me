import React from 'react'
import './services.css';
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id="services">
      <h5>My Research Works</h5>
      <h2>Publications</h2>
      <div className='container services__container'>
        <article className="service">
          <div className='service__head'>
            <h3>Vaccine Supplychain</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Proposed a Blockchain based vaccine supply management system.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Provides a strict modification free system.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Secure Certificate Validation.</p>
            </li>
            <a href="http://paideumajournal.com/gallery/11-may2021.pdf" className='btn btn-primary publication' target="_blank" rel="noreferrer">View Publication</a>
          </ul>
          
        </article>
        <article className="service">
          <div className='service__head'>
            <h3>E-Voting Technology</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Proposed a Blockchain based Electronic voting system.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Prevents fraudulent vote counting</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Voting can be done from smart phones with authentication.</p>
            </li>
            <a href="https://www.ijeat.org/wp-content/uploads/papers/v9i1/A1441109119.pdf" className='btn btn-primary publication' target="_blank" rel="noreferrer">View Publication</a>
          </ul>
        </article>
        <article className="service">
          <div className='service__head'>
            <h3>Home Security</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Proposed a IOT Based Home Security System.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Notifies the owner in case of trespassing.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Traps the burglar inside the house.</p>
            </li>
            <a href="http://sersc.org/journals/index.php/IJAST/article/view/9754" className='btn btn-primary publication' target="_blank" rel="noreferrer">View Publication</a>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services