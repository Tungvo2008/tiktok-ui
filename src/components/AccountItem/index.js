import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent-ord5-3.xx.fbcdn.net/v/t1.15752-9/495270668_3076244962555435_443504347134915307_n.png?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=daEVV4oc8dUQ7kNvwFGZzK1&_nc_oc=AdkdGffgCyVqf0UbS-gZFOUkv3ADYnLtK676aXBVegho8q9syOEYLL3ey-hEMerJPFehme1_vAFI5f2D_a0IEheZ&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&oh=03_Q7cD2gGpeFqOkNJ9x-tVddjObT-E0vwZ2fSiyc0UIgUqMnxwYA&oe=68785D2D"
                alt="tung"
            />
            <div className={cx('info')}>
                <p className={cx('username')}>
                    <span>Tungismee</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('name')}>Vo Thanh Tung</span>
            </div>
        </div>
    )
}

export default AccountItem
