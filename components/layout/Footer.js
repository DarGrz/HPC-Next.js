import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark">
        <div class="col-md-4 d-flex align-items-center">
          <Link
            href="/"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg class="bi" width="30" height="24">
              Bootstrap
            </svg>
          </Link>
          <span class="text-muted">© 2021 Company, Inc</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-muted" href="#">
              <svg class="bi" width="24" height="24">
                Twitter
              </svg>
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#">
              <svg class="bi" width="24" height="24">
                Instagram
              </svg>
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#">
              <svg class="bi" width="24" height="24">
                Facebook
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
