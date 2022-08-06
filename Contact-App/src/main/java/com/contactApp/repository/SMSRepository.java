package com.contactApp.repository;

import com.contactApp.models.SMS;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SMSRepository extends JpaRepository<SMS, Long> {
    @Query(value = "select * from sms s where s.phone_number=:phoneNumber order by s.id desc LIMIT 1", nativeQuery=true)
    SMS findTopByOrderByIdDesc(String phoneNumber);
}
