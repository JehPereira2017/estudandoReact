import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Modal } from 'reactstrap';
import { ModalHeader } from 'reactstrap';
import { ModalBody } from 'reactstrap';
import { ModalFooter } from 'reactstrap';

class ModalClientes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: props.isOpen
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color='secondary' onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalClientes;
