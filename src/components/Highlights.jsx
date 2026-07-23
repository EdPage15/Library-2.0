import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Highlight from './ui/Highlight';

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Library</span>?
                    </h2>
                    <div className="highlights__wrapper">
                        <Highlight>
                            icon={<FontAwesomeIcon icon='bolt' />}
                            title="Easy and Quick"
                            para="Get access to the book you purchased online instantly."
                        </Highlight>
                        <Highlight>
                            icon={<FontAwesomeIcon icon="book-open" />}
                            title="10,000+ books"
                            para="Library has books in all your favorite categories."
                        </Highlight>
                        <Highlight>
                            icon={<FontAwesomeIcon icon="tags" />}
                            title="Affordable"
                            para="Get your hands on popular books for as little as $10."
                        </Highlight>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights;
